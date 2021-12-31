describe(
	"A demonstration",
	function(){
		
		it( "This is a test that 'true' is indeed 'true'.", () => {
			expect( true ).toBe( true )
			expect( true ).not.toBeFalsy()
		})

	}
)


// Because the compiler is angry.
export {}
