import { describe,it,expect } from "vitest"
import { toBulletPoints } from "./formatText"

describe("toBulletPoints",()=>{
    it("splits sentences into separate bullets", ()=>{
        const result = toBulletPoints("Built a UI. Add tests")
        expect(result).toEqual(["Built a UI", "Add tests"])
    })

    it("returns an empty array for empty text",()=>{
        const result = toBulletPoints("")
        expect(result).toEqual([])
    })

    it.todo("splits lowercase sentences too (revisit bullet design)")
})