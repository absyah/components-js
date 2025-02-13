---
{
  "title": "useVisualStableUpdate",
  "linkToSource": "https://github.com/livekit/components-js/blob/main/packages/react/src/hooks/useVisualStableUpdate.ts"
}
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# useVisualStableUpdate

The `useVisualStableUpdate` hook is used to prevent visually jarring jumps and shifts of elements in an array. The algorithm only starts to update when there are more items than visually fit on a page. If this is the case, it will make sure that speaking participants move to the first page and are always visible.

## Import

```typescript
import { useVisualStableUpdate } from "@livekit/components-react";
```

## Remarks

Updating the array can occur because attendees leave or join a room, or because they mute/unmute or start speaking. The hook is used for the `GridLayout` and `CarouselLayout` components.

## Usage

```tsx
const trackRefs = useTracks();
const updatedTrackRefs = useVisualStableUpdate(trackRefs, itemPerPage);
```

{% partial file="p_usage.md" variables={exampleCount: 1} /%}

## Properties

{% parameter name="maxItemsOnPage" type="number" optional=false %}
{% /parameter %}

{% parameter name="trackReferences" type="TrackReferenceOrPlaceholder[]" optional=false %}
{% /parameter %}

{% parameter name="options" type="UseVisualStableUpdateOptions" optional=true %}
{% /parameter %}

## Returns

```typescript
TrackReferenceOrPlaceholder[]
```
