import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { searchDocuments } from "@/data/searchIndex";
import { navigationItems } from "@/data/navigation";

const normalize = (value: string) => value.toLowerCase().trim();

export default function Search() {
  const [location, navigate] = useLocation();
  const [localQuery, setLocalQuery] = useState("");

  const query = useMemo(() => {
    const searchParams = new URLSearchParams(location.split("?")[1] ?? "");
    return searchParams.get("q") ?? "";
  }, [location]);

  useEffect(() => {
    setLocalQuery(query);
  }, [query]);

  const normalizedQuery = normalize(query);

  const documents = useMemo(
    () =>
      searchDocuments.map((doc) => ({
        ...doc,
        haystack: normalize(
          `${doc.title} ${doc.description} ${doc.keywords.join(" ")}`,
        ),
      })),
    [],
  );

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }

    const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

    return documents
      .map((doc) => {
        const score = tokens.reduce(
          (acc, token) => acc + (doc.haystack.includes(token) ? 1 : 0),
          0,
        );
        return { ...doc, score };
      })
      .filter((doc) => doc.score > 0)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
  }, [documents, normalizedQuery]);

  const quickLinks = useMemo(
    () =>
      navigationItems
        .flatMap((item) => {
          if (!item.children || item.children.length === 0) {
            return [item];
          }
          return [item, ...item.children.map((child) => ({ ...child, isChild: true }))];
        })
        .filter((entry) =>
          normalizedQuery ? normalize(entry.name).includes(normalizedQuery) : false,
        )
        .slice(0, 5),
    [normalizedQuery],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = localQuery.trim();
    navigate(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search");
  };

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Site Search
          </p>
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Search Results</h1>
          <p className="text-sm text-muted-foreground sm:text-base">
            Use search to quickly find content across this academic portfolio — projects, skills, certifications, research articles, events, and resume entries. Start typing a keyword such as “data science”, “AI certificate analysis”, “scientometrics”, “bibliometrics”, or “academic CV” to jump directly to the most relevant section.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center"
        >
          <Input
            type="search"
            value={localQuery}
            onChange={(event) => setLocalQuery(event.target.value)}
            placeholder="Search the site"
            aria-label="Search the site"
            className="sm:w-64 lg:w-80"
          />
          <Button type="submit" disabled={!localQuery.trim()}>
            Search
          </Button>
        </form>
      </div>

      <p className="mt-2 text-xs text-muted-foreground">
        Try keywords like “AI-powered projects”, “research data scientist skills”, or “download academic CV”.
      </p>

      {normalizedQuery && (
        <p className="mt-6 text-sm text-muted-foreground">
          Showing results for <span className="font-semibold text-primary">"{query}"</span>
        </p>
      )}

      <div className="mt-8 space-y-8">
        {results.length > 0 ? (
          <>
            <Card>
              <CardHeader>
                <CardTitle>Matches</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {results.map((result) => (
                  <div key={result.href} className="space-y-2">
                    <Link
                      href={result.href}
                      className="text-lg font-semibold text-primary transition hover:underline"
                    >
                      {result.title}
                    </Link>
                    <p className="text-sm text-muted-foreground">{result.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {result.keywords.slice(0, 6).map((keyword) => (
                        <Badge key={keyword} variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </>
        ) : normalizedQuery ? (
          <Card>
            <CardContent className="space-y-4 py-10 text-center">
              <h2 className="text-xl font-semibold text-foreground">
                No direct matches found
              </h2>
              <p className="text-sm text-muted-foreground">
                Try a different keyword or explore the quick links below.
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="space-y-4 py-10 text-center">
              <h2 className="text-xl font-semibold text-foreground">
                Start typing to search the site
              </h2>
              <p className="text-sm text-muted-foreground">
                You can look up pages like "Investigations", "Researcher", or "Data Scientist".
              </p>
            </CardContent>
          </Card>
        )}

        {quickLinks.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {quickLinks.map((entry) => (
                <Link
                  key={entry.href}
                  href={entry.href}
                  className="rounded-full border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition hover:border-primary hover:bg-primary/10"
                >
                  {entry.name}
                </Link>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
