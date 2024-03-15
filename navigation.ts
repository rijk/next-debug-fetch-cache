import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "nl"] as const;
export const localePrefix = "always"; // Default

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  "/": "/",

  "/one": {
    en: "/one",
    nl: "/een",
  },
  "/two": {
    en: "/two",
    nl: "/twee",
  },
  "/dynamic/[dynamic]": {
    en: "/dynamic/[dynamic]",
    nl: "/dynamisch/[dynamic]",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
