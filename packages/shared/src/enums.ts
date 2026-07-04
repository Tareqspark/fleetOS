export const TRUCK_STATUSES = [
  "active",
  "in_transit",
  "idle",
  "maintenance",
  "out_of_service",
  "sold",
] as const;
export type TruckStatus = (typeof TRUCK_STATUSES)[number];

export const LOAD_STATUSES = [
  "draft",
  "booked",
  "dispatched",
  "in_transit",
  "delivered",
  "invoiced",
  "paid",
  "cancelled",
] as const;
export type LoadStatus = (typeof LOAD_STATUSES)[number];

export const TRAILER_TYPES = [
  "dry_van",
  "flatbed",
  "reefer",
  "tanker",
  "lowboy",
  "container",
  "chassis",
] as const;
export type TrailerType = (typeof TRAILER_TYPES)[number];

export const BUILT_IN_ROLES = [
  "super_admin",
  "company_owner",
  "fleet_manager",
  "dispatcher",
  "driver",
  "safety_manager",
  "accountant",
  "hr",
  "maintenance_manager",
  "broker",
  "customer",
  "vendor",
  "read_only",
] as const;
export type BuiltInRole = (typeof BUILT_IN_ROLES)[number];
