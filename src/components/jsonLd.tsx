import type { Thing, WithContext } from "schema-dts";

export function JsonLd<T extends Thing>({ data }: { data: WithContext<T> }) {
	// eslint-disable-next-line react/no-danger
	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
