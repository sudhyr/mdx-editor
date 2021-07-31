import React from "react";
import { Router } from "@reach/router";
import MDXContentView from './MDXContentView';

export default function AppRouter() {
  return (
    <Router>
      <MDXContentView path="/" />
    </Router>
  );
}
