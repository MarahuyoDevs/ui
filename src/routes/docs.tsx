import { RouteSectionProps } from "@solidjs/router";
import { Component } from "solid-js";
import { Button } from "~/components/primitives/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/primitives/tabs";

const ComponentLayout: Component<RouteSectionProps<{}>> = (props) => {
  return (
    <main class="container mx-auto max-w-[1440px] h-screen max-h-screen">
      <div class="fixed top-0">
        <header class="pb-8 px-4 pt-4 flex flex-row items-center gap-5">
          <span>M-UI</span>
          <nav>
            <ul class="flex flex-row items-center">
              <li>
                <Button variant={"link"} class="text-muted-foreground">
                  Docs
                </Button>
              </li>
              <li>
                <Button variant={"link"} class="text-muted-foreground">
                  Examples
                </Button>
              </li>
              <li>
                <Button variant={"link"} class="text-muted-foreground">
                  Templates
                </Button>
              </li>
            </ul>
          </nav>
        </header>
        <Tabs>
          <TabsList class="grid grid-cols-4 w-fit">
            <TabsTrigger as="a" href="/docs/getting-started" value="getStarted">
              Get Started
            </TabsTrigger>
            <TabsTrigger
              as="a"
              href="/docs/components/alert"
              value="components"
            >
              Components
            </TabsTrigger>
            <TabsTrigger as="a" href="/docs/styling" value="styling">
              Styling
            </TabsTrigger>
            <TabsTrigger as="a" href="/docs/theming" value="theming">
              Theming
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div class="grid grid-cols-12 h-full pt-36 pb-4">
        <aside class="col-span-2">Sidebar</aside>
        <article class="p-4 col-span-8 h-full overflow-y-auto prose dark:prose-invert !max-w-none prose-h1:heading-1 prose-h2:heading-2 prose-h3:heading-3 prose-h4:heading-4 prose-p:paragraph prose-blockquote:blockquote">
          {props.children}
        </article>
        <aside class="col-span-2">Sidebar</aside>
      </div>
    </main>
  );
};

export default ComponentLayout;
