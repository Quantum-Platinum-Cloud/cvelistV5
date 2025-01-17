/** a wrapper/fascade class to make it easier to use git libraries from within cve utils */
import { CommitResult, SimpleGit, Response, StatusResult } from 'simple-git';
export { StatusResult, Response };
export declare class Git {
    localDir: string;
    git: SimpleGit;
    /** constructor
     * @param init initializer
     */
    constructor(init?: Partial<Git>);
    /** returns git status in a promise
     *  Note that while StatusResult shows files with paths relative to pwd, working
     *  with those files (for example, add or rm) requires a full path
    */
    status(): Promise<StatusResult>;
    static genericCallback(err: any): void;
    /** git add files
     *  Note that fullPathFiles must be either full path specs or partial paths from this.localDir
     *  Note that fullPathFiles should NOT be a directory
     *
    */
    add(fullPathFiles: string | string[]): Promise<Response<string>>;
    /** git rm files
     *  Note that fullPathFiles must be either full path specs or partial paths from this.localDir
     *  Note that fullPathFiles should NOT be a directory
    */
    rm(fullPathFiles: string | string[]): Promise<Response<void>>;
    /**
     * commits staged files
     * @param msg commit message
     * @returns CommitResult
     *
     */
    commit(msg: string): Promise<CommitResult>;
}
