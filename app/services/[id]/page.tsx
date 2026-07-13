import ServiceDetails from "@/components/ServiceDetails";
import { SERVICES_DATA } from "@/lib/data";

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ id: service.id }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ServiceDetails serviceId={id} />;
}
