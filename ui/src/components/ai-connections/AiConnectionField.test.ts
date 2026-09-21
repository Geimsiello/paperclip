import { describe, expect, it } from "vitest";
import { aiProviderForAdapter } from "./AiConnectionField";

describe("aiProviderForAdapter", () => {
  it("derives managed OpenCode providers from the selected model", () => {
    expect(aiProviderForAdapter("opencode_local", "ollama/gpt-oss:120b")).toBe(
      "ollama",
    );
    expect(
      aiProviderForAdapter("opencode_local", "openrouter/openai/gpt-5"),
    ).toBe("openrouter");
  });

  it("does not attach OpenRouter to other OpenCode providers", () => {
    expect(aiProviderForAdapter("opencode_local", "openai/gpt-5")).toBeUndefined();
    expect(aiProviderForAdapter("opencode_local")).toBeUndefined();
  });
});
