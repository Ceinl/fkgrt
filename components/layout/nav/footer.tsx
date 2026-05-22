"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "../../icon";
import { useLayout } from "../layout-context";
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  const { globalSettings } = useLayout();
  const { header, footer } = globalSettings!;
  // Cast to access extended fields not yet in generated types
  const footerData = footer as any;

  return (
    <footer className="bg-gray-50 border-t dark:bg-gray-900">
      {/* Main footer grid */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Column 1: Logo + name */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              aria-label="go home"
              className="flex flex-col items-start gap-3"
            >
              <Icon
                parentColor={header!.color!}
                data={header!.icon}
                className="text-blue-600"
              />
              <div>
                <p className="font-bold text-sm text-gray-900 dark:text-white uppercase leading-tight">
                  {footerData?.collegeName || header?.name}
                </p>
                {footerData?.collegeSubtitle && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">
                    {footerData.collegeSubtitle}
                  </p>
                )}
              </div>
            </Link>
          </div>

          {/* Column 2: Contacts */}
          <div className="flex flex-col gap-4">
            <h6 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
              Контакти
            </h6>
            <div className="w-8 h-0.5 bg-blue-600" />
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {footerData?.contacts?.phones && (
                <li className="flex items-start gap-2">
                  <Phone size={16} className="text-blue-600 mt-0.5 shrink-0" />
                  <span>{footerData.contacts.phones}</span>
                </li>
              )}
              {footerData?.contacts?.address && (
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-blue-600 mt-0.5 shrink-0" />
                  <a
                    href={footerData?.contacts?.mapsUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    {footerData.contacts.address}
                  </a>
                </li>
              )}
              {footerData?.contacts?.email && (
                <li className="flex items-start gap-2">
                  <Mail size={16} className="text-blue-600 mt-0.5 shrink-0" />
                  <a
                    href={`mailto:${footerData.contacts.email}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {footerData.contacts.email}
                  </a>
                </li>
              )}
            </ul>
            {footer?.social && footer.social.length > 0 && (
              <div className="flex gap-3 mt-2">
                {footer.social.map((link, index) => (
                  <Link
                    key={`${index}`}
                    href={link!.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      data={{ ...link!.icon, size: "small" }}
                      className="text-gray-500 hover:text-blue-600 block transition-colors"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Column 3: Useful links */}
          <div className="flex flex-col gap-4">
            <h6 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
              Корисні посилання
            </h6>
            <div className="w-8 h-0.5 bg-blue-600" />
            <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-decimal list-inside">
              {footerData?.usefulLinks?.map((link: any, index: number) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-blue-900 text-white py-4">
        <div className="mx-auto max-w-6xl px-6 text-center text-xs leading-relaxed">
          <p>
            © {new Date().getFullYear()} ВІДОКРЕМЛЕНИЙ СТРУКТУРНИЙ ПІДРОЗДІЛ
            &laquo;
            {footerData?.collegeName ||
              "ФАХОВИЙ КОЛЕДЖ ГЕОЛОГОРОЗВІДУВАЛЬНИХ ТЕХНОЛОГІЙ"}{" "}
            {footerData?.collegeSubtitle?.toUpperCase() ||
              "КИЇВСЬКОГО НАЦІОНАЛЬНОГО УНІВЕРСИТЕТУ ІМЕНІ ТАРАСА ШЕВЧЕНКА"}
            &raquo;
          </p>
        </div>
      </div>
    </footer>
  );
};
