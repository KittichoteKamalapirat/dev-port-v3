import { CSSProperties, ReactNode } from "react";
import { borderColors, primitiveColors, semanticColors } from "../theme/colors";

import { Meta } from "@storybook/react";

import { cn } from "../lib/cn";

import P from "../app/components/Text/P";
import CodeBlock from "./CodeBlock";
import DocCell, { DocCellProps } from "./DocCell";
import DocSection, { DocSectionProps } from "./DocSection";
import DocTable from "./DocTable";
import InlineCode from "./InlineCode";
import MainDocContainer from "./MainDocContainer";
import MainDocSection from "./MainDocSection";
import "../app/globals.css";
import {
  configToCssColor,
  createClassNamePattern,
  flattenTailwindConfigToArr,
} from "./utils";

const meta: Meta = {
  title: "Tokens/Colors",
};

export default meta;

const DocCellLeft = ({ className, ...restProps }: DocCellProps) => {
  return (
    <DocCell
      {...restProps}
      className={cn("w-[128px] text-center", className)}
    />
  );
};

const DocCellRight = ({ className, ...restProps }: DocCellProps) => {
  return (
    <DocCell
      {...restProps}
      withPaddingLeft
      className={cn("text-left", className)}
    />
  );
};

type ColorPreviewItemProps = {
  label: string;
  colorValue: string;
  foregroundColor?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  borderColor?: string;
  withTransparentPatternBg?: boolean;
};

const ColorPreviewItem = ({
  label,
  colorValue,
  foregroundColor,
  borderColor,
  backgroundImage,
  backgroundColor = semanticColors.background.primary,
  withTransparentPatternBg = true,
}: ColorPreviewItemProps) => {
  return (
    <tr>
      <DocCellLeft>
        <div
          // Only show shadow when there is no borderColor to not interfere with the preview
          className={cn("relative h-10 w-full rounded-md", {
            shadow: !borderColor,
            // Repeating linear gradient to simulate a checkerboard pattern
            // making it noticeable if some color is semi-transaparent.
            "bg-stripes-transparent_pattern": withTransparentPatternBg,
          })}
        >
          <div
            className={cn(
              "absolute inset-0 z-10 rounded-md grid place-content-center",
              {
                // Add ring only when there's borderColor
                "ring-1 ring-inset": borderColor,
              }
            )}
            style={
              {
                color: foregroundColor
                  ? configToCssColor(foregroundColor)
                  : undefined,
                backgroundColor: configToCssColor(backgroundColor),
                backgroundImage: backgroundImage
                  ? configToCssColor(backgroundImage)
                  : undefined,
                // Display border color using tailwind ring
                "--tw-ring-color": borderColor
                  ? configToCssColor(borderColor)
                  : undefined,
              } as CSSProperties
            }
          >
            {/* Show preview texts if foreground color is specified */}
            {foregroundColor ? "AaBbCcDd" : undefined}
          </div>
        </div>
      </DocCellLeft>
      <DocCellRight>
        <CodeBlock>{label}</CodeBlock>
      </DocCellRight>
      <DocCellRight>
        <CodeBlock className="text-foreground-tertiary">{colorValue}</CodeBlock>
      </DocCellRight>
    </tr>
  );
};

type ColorListProps = {
  colorItems: ColorPreviewItemProps[];
};

const ColorList = ({ colorItems }: ColorListProps) => {
  return (
    <DocTable
      header={
        <tr>
          <DocCellLeft asChild>
            <th>Preview</th>
          </DocCellLeft>
          <DocCellRight asChild>
            <th>Class Name</th>
          </DocCellRight>
          <DocCellRight asChild>
            <th>Value</th>
          </DocCellRight>
        </tr>
      }
      body={colorItems.map((itemProps) => {
        return <ColorPreviewItem key={itemProps.label} {...itemProps} />;
      })}
    />
  );
};

type ColorSectionProps = Pick<DocSectionProps, "title" | "description"> &
  Partial<Pick<ColorListProps, "colorItems">>;

const ColorSection = ({
  title,
  description,
  colorItems,
}: ColorSectionProps) => {
  if (!colorItems?.length) return null;

  return (
    <DocSection title={title} description={description}>
      <ColorList colorItems={colorItems} />
    </DocSection>
  );
};

type ToColorPreviewItemPropsParams = {
  category?: string;
  key: string;
  value: string;
};

const toColorPreviewItemProps = ({
  category,
  key,
  value,
}: ToColorPreviewItemPropsParams): ColorPreviewItemProps => {
  return {
    label: createClassNamePattern(category ? [category, key] : [key]),
    backgroundColor: value,
    colorValue: value,
  };
};

const primitiveColorSectionDescription: Record<string, ReactNode> = {
  brand: (
    <p>
      Techically, <InlineCode children="*-brand-<variant>" /> are semantic
      tokens according to the design tokens. However, it's used to compose other
      semantic tokens and mostly don't have alpha channel built-in (we can
      compose them with custom opacity modifier). They are kind of semi-semantic
      (semantic in the name, but behave like primitive tokens). Only judging by
      how we use it, <InlineCode>brand</InlineCode> colors belong here with
      primitive tokens.
    </p>
  ),
};

export const Colors = () => {
  return (
    <MainDocContainer>
      <MainDocSection
        title="Semantic Colors"
        description={
          <P>
            Color tokens can be used with <InlineCode children="bg-<token>" />,{" "}
            <InlineCode children="text-<token>" />,{" "}
            <InlineCode children="border-<token>" />,{" "}
            <InlineCode children="ring-<token>" />,{" "}
            <InlineCode children="outline-<token>" />
          </P>
        }
      >
        {Object.entries(semanticColors).map(([category, config]) => {
          const colorItems = flattenTailwindConfigToArr(config).map(
            ({ key, value }): ColorPreviewItemProps => {
              // Foreground previews
              if (category.includes("foreground")) {
                return {
                  label: createClassNamePattern([category, key]),
                  foregroundColor: value,
                  backgroundColor: key.includes("inverse")
                    ? // Using forground color as background color for inverse colors
                      semanticColors.foreground.primary
                    : // otherwise, use normal background color
                      semanticColors.background.primary,
                  colorValue: value,
                  withTransparentPatternBg: false,
                };
              }

              return toColorPreviewItemProps({
                category,
                key,
                value,
              });
            }
          );

          return (
            <ColorSection
              key={category}
              title={category}
              colorItems={colorItems}
            />
          );
        })}
        {/* <ColorSection title="Gradients" colorItems={backgroundImageItems} /> */}
      </MainDocSection>

      <MainDocSection
        title="Primitive Colors"
        description={
          <p>
            Generally, semantic colors are preferred over primitive colors since
            it has meaning and support dark theme automatically. Use primitive
            valurs semantic colors are not supported{" "}
            <InlineCode children="*-<token>" /> for example,{" "}
            <InlineCode children="bg-neutral-500" />.
          </p>
        }
      >
        {Object.entries(primitiveColors).map(([category, config]) => {
          const colorItems = flattenTailwindConfigToArr(config).map(
            ({ key, value }): ColorPreviewItemProps => {
              return toColorPreviewItemProps({
                category,
                key,
                value,
              });
            }
          );

          return (
            <ColorSection
              key={category}
              title={category}
              colorItems={colorItems}
              description={primitiveColorSectionDescription[category]}
            />
          );
        })}
      </MainDocSection>

      <MainDocSection
        title="Border Colors"
        description={
          <p>
            Border colors can be used for border colors by{" "}
            <InlineCode children="<border,ring,outline>-<token>" />. But they
            also avaible globally with{" "}
            <InlineCode children="<utility>-border-<token>" />, e.g{" "}
            <InlineCode>bg-border-bounds</InlineCode>.
          </p>
        }
      >
        <ColorList
          colorItems={flattenTailwindConfigToArr(borderColors).map(
            ({ key, value }): ColorPreviewItemProps => {
              return {
                label: createClassNamePattern(["border", key], {
                  prefix: null,
                }),
                borderColor: value,
                colorValue: value,
                withTransparentPatternBg: false,
              };
            }
          )}
        />
      </MainDocSection>
    </MainDocContainer>
  );
};
