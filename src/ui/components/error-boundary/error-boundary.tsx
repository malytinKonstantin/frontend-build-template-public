import * as React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'

const { Title } = Typography

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
  errorMessage: string
}

export default class ErrorBoundary extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)

    this.state = {
      hasError: false,
      errorMessage: 'message lorem ipsum',
    }
  }

  public static getDerivedStateFromError(error: string): State {
    console.error(error)
    return { hasError: true, errorMessage: error }
  }

  public componentDidCatch(error: Error, info: React.ErrorInfo): void {
    // логирование ошибок
    console.error(error)
    console.log(info)
  }

  public render(): React.ReactNode {
    const { hasError, errorMessage } = this.state
    if (hasError) {
      return (
        <div>
          <div className="container">
            <Title level={2}>Произошла ошибка.</Title>
            {errorMessage && (
              <Title level={4} type="secondary">
                {errorMessage}
              </Title>
            )}
            <Link to="/">на главную</Link>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
