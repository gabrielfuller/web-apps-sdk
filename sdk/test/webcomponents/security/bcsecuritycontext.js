/*
 *
 *Copyright (c) 2012-2014 Adobe Systems Incorporated. All rights reserved.
 
 *Permission is hereby granted, free of charge, to any person obtaining a
 *copy of this software and associated documentation files (the "Software"),
 *to deal in the Software without restriction, including without limitation
 *the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *and/or sell copies of the Software, and to permit persons to whom the
 *Software is furnished to do so, subject to the following conditions:
 *
 *The above copyright notice and this permission notice shall be included in
 *all copies or substantial portions of the Software.
 *
 *THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *DEALINGS IN THE SOFTWARE.
 *
 */
describe("BCAPI.Security.BcSecurityContext", function() {
    var BcSecurityContext = BCAPI.Security.BcSecurityContext,
        AccessToken = BCAPI.Security.AccessToken,
        User = BCAPI.Security.User;

    beforeEach(function() {
        jasmine.addMatchers(ComponentCustomMatchers);

        this._user = new User({
            "userId": 1,
            "firstName": "John",
            "lastName": "Doe"
        });

        this._accessToken = new AccessToken();
        this._config = {
            "siteUrl": "https://simplesite.com",
            "accessToken": "encrypted token value"
        };

        this._securityContext = new BcSecurityContext(this._accessToken, this._user, this._config);

        expect(this._securityContext.accessToken).toBe(this._accessToken);
        expect(this._securityContext.user).toBe(this._user);
        expect(this._securityContext.config).toBe(this._config);
    });

    it("Ensures renew access is not supported at the moment.", function() {
        var self = this;

        expect(function() {
            self._securityContext.renewAccess();
        }).toBeCustomError("BCAPI.Components.Exceptions.NotImplementedException");
    });
});