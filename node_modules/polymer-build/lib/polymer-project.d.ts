/// <reference types="node" />
/// <reference types="vinyl" />
import { Transform } from 'stream';
import File = require('vinyl');
import { ProjectConfig, ProjectOptions } from 'polymer-project-config';
import { BuildAnalyzer } from './analyzer';
import { Bundler } from './bundle';
export declare class PolymerProject {
    config: ProjectConfig;
    private _splitFiles;
    private _parts;
    /**
     * A `Transform` stream that runs Hydrolysis analysis on the files. It
     * can be used to get information on dependencies and fragments for the
     * project once the source & dependency streams have been piped into it.
     */
    analyzer: BuildAnalyzer;
    /**
     * A `Transform` stream that modifies the files that pass through it based
     * on the dependency analysis done by the `analyzer` transform. It "bundles"
     * a project by injecting its dependencies into the application fragments
     * themselves, so that a minimum number of requests need to be made to load.
     *
     * (NOTE: The analyzer stream must be in the pipeline somewhere before this.)
     */
    bundler: Bundler;
    constructor(config: ProjectConfig | ProjectOptions | string);
    /**
     * Returns the analyzer's stream of this project's source files - files
     * matched by the project's `config.sources` value.
     */
    sources(): NodeJS.ReadableStream;
    /**
     * Returns the analyzer's stream of this project's dependency files - files
     * loaded inside the analyzed project that are not considered source files.
     */
    dependencies(): NodeJS.ReadableStream;
    /**
     * Returns a new `Transform` that splits inline script into separate files.
     * To use an HTML splitter on multiple streams, create a new instance for each
     * stream.
     */
    splitHtml(): Transform;
    /**
     * Returns a new `Transform` that rejoins previously inline scripts that were
     * split from an HTML by `splitHtml` into their parent HTML file.
     * To use an HTML rejoiner on multiple streams, create a new instance for each
     * stream.
     */
    rejoinHtml(): Transform;
    isSplitFile(parentPath: string): boolean;
    getSplitFile(parentPath: string): SplitFile;
    addSplitPath(parentPath: string, childPath: string): void;
    getParentFile(childPath: string): SplitFile;
}
/**
 * Represents a file that is split into multiple files.
 */
export declare class SplitFile {
    path: string;
    parts: Map<string, string>;
    outstandingPartCount: number;
    vinylFile: File;
    constructor(path: string);
    addPartPath(path: string): void;
    setPartContent(path: string, content: string): void;
    readonly isComplete: boolean;
}
