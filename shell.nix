{ pkgs ? import <nixpkgs> {} }:

let lib = pkgs.lib;
	unstable = import <unstable> {};
in pkgs.mkShell (with pkgs; {
	buildInputs = [
		nodejs unstable.nodePackages.pnpm
		doppler stripe-cli
		openssl
	];

	shellHook = ''PATH="$PWD/node_modules/.bin:$PATH"'';

	PRISMA_SCHEMA_ENGINE_BINARY = "${prisma-engines}/bin/schema-engine";
	PRISMA_QUERY_ENGINE_BINARY = "${prisma-engines}/bin/query-engine";
	PRISMA_QUERY_ENGINE_LIBRARY = "${prisma-engines}/lib/libquery_engine.node";
	PRISMA_INTROSPECTION_ENGINE_BINARY = "${prisma-engines}/bin/introspection-engine";
	PRISMA_FMT_BINARY = "${prisma-engines}/bin/prisma-fmt";
})