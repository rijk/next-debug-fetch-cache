import createMiddleware from "next-intl/middleware";
import { pathnames } from "./navigation";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "nl"],

  // Used when no locale matches
  defaultLocale: "en",

  localePrefix: "always",

  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(nl|en)/:path*"],
};
