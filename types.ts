export interface AppDefinition {
    appName: string
    backendDependencies: Dependency[]
    frontendDependencies: Dependency[]
    modules: Module[]
}

export interface Dependency {
    package: string
    version: string
    type: "app" | "dev"
}

export interface Module {
    name: string
    tables: Table[]
}

export interface Table {
    tableName: string
    columns: Column[]
}

export interface Column {
    name: string
    type: "uuid" | "integer" | "bigint" | "decimal" | "varchar" | "text" | "timetz" | "timestamptz" | "timestamp" | "date" | "time" | "boolean" | "set" | "json",
    length?: number
    required: boolean
    default?: string
    precision?: number
    scale?:number
    primaryKey?: boolean
    unique?: boolean
    set?: string[]
    foreignKey?: ForeignKey
}

export interface ForeignKey {
    table: string
    column: string
}
