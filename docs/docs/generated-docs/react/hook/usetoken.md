---
{
  "title": "useToken",
  "linkToSource": "https://github.com/livekit/components-js/blob/main/packages/react/src/hooks/useToken.ts"
}
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# useToken

The `useToken` hook fetches a token from the given token endpoint with the given user info.

## Import

```typescript
import { useToken } from "@livekit/components-react";
```

## Usage

```tsx
const token = useToken(<token-endpoint>, roomName, { userInfo: { identity, name }});
```

{% partial file="p_usage.md" variables={exampleCount: 1} /%}

## Properties

{% parameter name="roomName" type="string" optional=false %}
{% /parameter %}

{% parameter name="tokenEndpoint" type="string | undefined" optional=false %}
{% /parameter %}

{% parameter name="options" type="UseTokenOptions" optional=true %}
{% /parameter %}

## Returns

```typescript
string | undefined;
```
