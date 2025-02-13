---
{
  "title": "GridLayout",
  "linkToSource": "https://github.com/livekit/components-js/blob/main/packages/react/src/components/layout/GridLayout.tsx"
}
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# GridLayout

The `GridLayout` component displays the nested participants in a grid where every participants has the same size. It also supports pagination if there are more participants than the grid can display.

## Import

```typescript
import { GridLayout } from "@livekit/components-react";
```

## Remarks

To ensure visual stability when tiles are reordered due to track updates, the component uses the `useVisualStableUpdate` hook.

## Usage

```tsx
<LiveKitRoom>
  <GridLayout tracks={tracks}>
    <ParticipantTile />
  </GridLayout>
<LiveKitRoom>
```

{% partial file="p_usage.md" variables={exampleCount: 1} /%}

## Properties

{% parameter name="children" type="React.ReactNode" optional=false %}
{% /parameter %}

{% parameter name="tracks" type="TrackReferenceOrPlaceholder[]" optional=false %}
{% /parameter %}
