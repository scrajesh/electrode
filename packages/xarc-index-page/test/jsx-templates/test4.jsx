/* @jsx createElement */

import { IndexPage, createElement, Require } from "../../lib/jsx"; // eslint-disable-line

export default (
  <IndexPage>
    <Require _id="./test-token" name="require1" />
    <Require _id="./test-token" name="require2" />
    <Require _id="./test-token" name="require3" />
  </IndexPage>
);
