---
{
  "title": "useRemoteParticipant",
  "linkToSource": "https://github.com/livekit/components-js/blob/main/packages/react/src/hooks/useRemoteParticipant.ts"
}
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# useRemoteParticipant

The `useRemoteParticipant` hook returns the RemoteParticipant with the given `identity`<!-- -->.

## Import

```typescript
import { useRemoteParticipant } from "@livekit/components-react";
```

## Remarks

To optimize performance, you can use the `updateOnlyOn` property to decide on what `ParticipantEvents` the hook updates.

## Usage

```tsx
const participant = useRemoteParticipant("Russ");
```

{% partial file="p_usage.md" variables={exampleCount: 1} /%}

## Properties

{% parameter name="identity" type="string" optional=false %}
{% /parameter %}

{% parameter name="options" type="UseRemoteParticipantOptions" optional=true %}
{% /parameter %}

## Returns

```typescript
RemoteParticipant | undefined;
```
