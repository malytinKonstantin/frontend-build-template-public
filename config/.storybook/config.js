import { configure, addDecorator } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import { withInfo } from "@storybook/addon-info";
import { withTests } from "@storybook/addon-jest";

import * as results from "../../.jest-test-results.json";

addDecorator(jsxDecorator);

addDecorator(withInfo({ inline: true }));

addDecorator(
  withTests({
    results,
    filesExt: "((\\.specs?)|(\\.tests?))?(\\.ts)?$"
  })
);

configure(require.context("../../src/ui", true, /\.story\.tsx$/), module);
