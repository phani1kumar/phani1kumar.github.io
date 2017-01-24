/// <reference types="node" />
/// <reference types="vinyl" />
import { Transform } from 'stream';
import File = require('vinyl');
import { ProjectConfig } from 'polymer-project-config';
import { BuildAnalyzer } from './analyzer';
export declare class Bundler extends Transform {
    config: ProjectConfig;
    sharedBundleUrl: string;
    analyzer: BuildAnalyzer;
    sharedFile: File;
    constructor(config: ProjectConfig, analyzer: BuildAnalyzer);
    _transform(file: File, _encoding: string, callback: (error?: any, data?: File) => void): void;
    _flush(done: (error?: any) => void): void;
    _buildBundles(): Promise<Map<string, string>>;
    _addSharedImportsToShell(bundles: Map<string, string[]>): string;
    _generateSharedBundle(sharedDeps: string[]): Promise<any>;
    _getBundles(): Promise<Map<string, string[]>>;
}
