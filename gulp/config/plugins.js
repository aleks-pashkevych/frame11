import replace from "gulp-replace"; // replace something
import plumber from "gulp-plumber"; // Errors handling
import notify from "gulp-notify"; // Messages
import browserSync from "browser-sync"; // Local server
import newer from "gulp-newer"; // Checking for updates
import ifPlugin from "gulp-if";

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browserSync: browserSync,
  newer: newer,
  if: ifPlugin
};
