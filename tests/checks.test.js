/**
 * Checker Script for mooc_git-entrega2_rebase1
 */


// IMPORTS
const should = require('chai').should();
const git = require('simple-git/promise');
const Utils = require("./utils");
const to = require("./to");
const path = require('path');
const fs = require('fs-extra');


// Parse input arguments
const args = JSON.parse(JSON.stringify(process.argv));
// Gets the student name from args[2]
if (!(args.length > 2)) {
    console.error("student name not found");
    process.exit(1);
}
const student = args[2];

// CONSTS
const REPO_NAME = 'my_calculator_2';
const PATH_ASSIGNMENT = path.resolve(path.join(__dirname, "../"));
const REPO_URL = `https://github.com/${student}/${REPO_NAME}`;
const PATH_REPO = path.join(PATH_ASSIGNMENT, REPO_NAME);


// GLOBALS
let error_critical = null;

let mygit = git(PATH_ASSIGNMENT);

describe('mooc_git-entrega2_rebase1', function () {

    it("", async function () {
        this.name = "1. Looking for the master branch";
        this.score = 1;
        this.msg_ok = `Master branch found at ${REPO_URL}`;
        [_, _] = await to(fs.remove(PATH_REPO));
        [error_repo, _] = await to(mygit.clone(REPO_URL));
        if (error_repo) {
            this.msg_err = `Master branch not found at ${REPO_URL}.\n\t\tError: >>${error_repo}<<`;
            error_critical = this.msg_err;
        }
        await to(mygit.cwd(PATH_REPO));
        should.not.exist(error_repo);
    });

    it("", async function () {
        const expected = "x^3";
        this.name = `2. Looking for '${expected}' in final master rebase contents`;
        this.score = 1.5;
        if (error_critical) {
            this.msg_err = error_critical;
            should.not.exist(error_critical);
        } else {
            let output;
            [err_show, output] = await to(mygit.show(["HEAD:calculator.html"]));
            this.msg_ok = `Found '${expected}' in master merge HEAD contents`;
            this.msg_err = `'${expected}' not found in final master merge HEAD contents`;
            Utils.search(expected, output).should.be.equal(true);
        }
    });

    it("", async function () {
        const expected = "x^2";
        this.name = `3. Looking for '${expected}' in final master rebase contents`;
        this.score = 3;
        if (error_critical) {
            this.msg_err = error_critical;
            should.not.exist(error_critical);
        } else {
            let output;
            [err_show, output] = await to(mygit.show(["HEAD:calculator.html"]));
            this.msg_ok = `Found '${expected}' in master merge HEAD contents`;
            this.msg_err = `'${expected}' not found in final master merge HEAD contents`;
            Utils.search(expected, output).should.be.equal(true);
        }
    });

    it("", async function () {
        const expected = "1/x";
        this.name = `4. Looking for '${expected}' in final master rebase contents`;
        this.score = 3;
        if (error_critical) {
            this.msg_err = error_critical;
            should.not.exist(error_critical);
        } else {
            let output;
            [err_show, output] = await to(mygit.show(["HEAD:calculator.html"]));
            this.msg_ok = `Found '${expected}' in master merge HEAD contents`;
            this.msg_err = `'${expected}' not found in final master merge HEAD contents`;
            Utils.search(expected, output).should.be.equal(true);
        }
    });

    it("", async function () {
        const expected = "x^4";
        this.name = `5. Looking for '${expected}' in final master rebase contents`;
        this.score = 1.5;
        if (error_critical) {
            this.msg_err = error_critical;
            should.not.exist(error_critical);
        } else {
            let output;
            [err_show, output] = await to(mygit.show(["HEAD:calculator.html"]));
            this.msg_ok = `Found '${expected}' in master merge HEAD contents`;
            this.msg_err = `'${expected}' not found in final master merge commit HEAD contents`;
            Utils.search(expected, output).should.be.equal(true);
        }
    });
});
