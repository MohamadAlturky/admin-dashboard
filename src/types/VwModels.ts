type GUID = string;
type DateTime = string | Date;
type Decimal = number;

export interface EmptyCarMission {
  Id: string;
  Type: string;
  MissionResponsible: string;
  MissionResponsibleNumber: string;
  FromAddress: string;
  ToAddress: string;
  City: string;
  Price: number;
  ExecuteDateTime: Date;
  State: string;
  Description: string;
  SellerId: string;
  BuyerId: string;

  NumberOfCarsAvailable: number;
  CarSize: number;
  IsLocal: boolean;
}

export interface TransferMission {
  Id: GUID;
  Type: string;
  MissionResponsible: string;
  MissionResponsibleNumber: string;
  FromAddress: string;
  ToAddress: string;
  City: string;
  Price: Decimal;
  ExecuteDateTime: DateTime;
  State: string;
  Description: string;
  SellerId: GUID;
  BuyerId: GUID;

  ApartmentType: string;
  ApartmentArea: string;
  IsElevatorAvailable: boolean;
  IsWrapping: boolean;
  FromAddressFloor: string;
  ToAddressFloor: string;
}

export interface CleaningMission {
  Id: string;
  Type: string;
  MissionResponsible: string;
  MissionResponsibleNumber: string;
  FromAddress: string;
  ToAddress: string;
  City: string;
  Price: number;
  ExecuteDateTime: Date;
  State: string;
  Description: string;
  SellerId: string;
  BuyerId: string;

  IsHaveBalcony: boolean;
  ApartmentType: string;
}

export interface WarehousingMission {
  Id: string;
  Type: string;
  MissionResponsible: string;
  MissionResponsibleNumber: string;
  FromAddress: string;
  ToAddress: string;
  City: string;
  Price: number;
  ExecuteDateTime: Date;
  State: string;
  Description: string;
  SellerId: string;
  BuyerId: string;

  StorageDuration: number;
  AreaInCubicMeter: Decimal;
}
