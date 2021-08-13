import React from "react";
import { Router } from "@reach/router";
import MDXContentView from './MDXContentView';

const PUBLIC_PATH = process.env.PUBLIC_PATH || "/"

export default function AppRouter() {
  return (
    <Router>
      <MDXContentView path={`${PUBLIC_PATH}`} />
    </Router>
  );
}
