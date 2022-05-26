import { verifyPass } from "./verifier"

describe("password", () => {
    
    
    it("is large than 8 characters, it passes", () => {
        const result = verifyPass("Ab3456789");
        expect(result).toBeTruthy();
    })

    it("is 8 characters, it fails", () => {
        const result = verifyPass("ab345678");
        expect(result).toBe(false);
    })


    it("is null characters, it fails", () => {
        const result = verifyPass(null);
        expect(result).toBe(false);
    })

    it("is null characters, it fails", () => {
        const result = verifyPass(undefined);
        expect(result).toBe(false);
    })
   

    it("contains uppercase it works" , () => {
        const result = verifyPass("ABa12345678");
        expect(result).toBe(true);
    })

    it("not contains uppercase it fails" , () => {
        const result = verifyPass("ab12345678");
        expect(result).toBe(false);
    })
   
    it("contains lowercase it works" , () => {
        const result = verifyPass("abA12345678");
        expect(result).toBe(true);
    })

    it("not contains lowercase it fails" , () => {
        const result = verifyPass("AB12345678");
        expect(result).toBe(false);
    })

    it("contains number it works" , () => {
        const result = verifyPass("abA12345678");
        expect(result).toBe(true);
    })

    it("not contains number it fails" , () => {
        const result = verifyPass("ABabasfsfgdsf");
        expect(result).toBe(false);
    })

})