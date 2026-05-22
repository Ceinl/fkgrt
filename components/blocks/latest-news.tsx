import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import { Card } from "../ui/card";

export interface NewsPost {
  title: string;
  date: string | null;
  heroImg: string | null;
  url: string;
}

interface LatestNewsSectionProps {
  posts: NewsPost[];
}

export function LatestNewsSection({ posts }: LatestNewsSectionProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-16 bg-white dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-semibold">Останні новини</h2>
          <Link
            href="/posts"
            className="text-blue-600 hover:underline flex items-center gap-1 text-sm font-medium"
          >
            Всі новини <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => {
            const date = post.date ? new Date(post.date) : null;
            const formattedDate =
              date && !isNaN(date.getTime())
                ? format(date, "dd.MM.yyyy")
                : "";

            return (
              <Card
                key={post.url}
                className="overflow-hidden group hover:shadow-md transition-shadow"
              >
                {post.heroImg && (
                  <Link href={post.url}>
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={post.heroImg}
                        alt={post.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                )}
                <div className="p-5">
                  {formattedDate && (
                    <p className="text-xs text-gray-400 mb-2">{formattedDate}</p>
                  )}
                  <h3 className="font-semibold text-base leading-snug mb-3">
                    <Link
                      href={post.url}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <Link
                    href={post.url}
                    className="text-blue-600 text-sm flex items-center gap-1 hover:underline"
                  >
                    Детальніше <ArrowRight size={14} />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
