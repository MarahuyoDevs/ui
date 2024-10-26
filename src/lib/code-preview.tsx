import { Component, JSX } from "solid-js";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/primitives/tabs";
import hljs from "highlight.js";
import { Card, CardContent } from "~/components/primitives/card";
import { Info } from "lucide-solid";
const CodePreview: Component<{
  preview: JSX.Element;
  children: JSX.Element;
}> = (props) => {
  return (
    <Tabs defaultValue="preview" class="h-fit">
      <TabsList class="grid w-fit grid-cols-2">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" class="h-fit">
        <Card class="h-fit">
          <CardContent class="p-4 h-fit">{props.preview}</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="code">{props.children}</TabsContent>
    </Tabs>
  );
};

export default CodePreview;
