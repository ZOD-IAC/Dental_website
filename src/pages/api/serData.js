import servicesData from "@/Data/services.json";

export default function handler(req, res) {
  const { head } = req.query;

  // If a key is provided, filter the data by key
  if (head) {
    const filteredService = servicesData.find(
      (service) => service.head === head,
    );
    if (filteredService) {
      res.status(200).json(filteredService);
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } else {
    // Return all services if no key is provided
    res.status(200).json(servicesData);
  }
}
