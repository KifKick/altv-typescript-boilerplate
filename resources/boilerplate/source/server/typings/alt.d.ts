declare module "alt" {
	enum VehicleLockState {
		None = 0,
		Unlocked,
		Locked,
		LockoutPlayerOnly,
		LockPlayerInside,
		InitiallyLocked,
		ForceDoorsShut,
		LockedCanBeDamaged
	}

	export interface playerDiscord {
		readonly avatar: string;
		readonly descriminator: string;
		readonly id: number;
		readonly name: string;
	}

	export class Position {
		x: number;
		y: number;
		z: number;
	}

	export class BaseObject {
		setMeta(name: string, value: any): void;
		getMeta(name: string): any;
	}

	export class Entity extends BaseObject {
		pos: Position;
		readonly id: number;
	}

	export class Checkpoint { }
	export class Blip { }

	export class Player extends Entity {
		readonly ping: number;
		name: string;
		readonly vehicle: Vehicle;
		readonly seat: number;
		readonly health: number;
		model: string;
		_inventory: [];
		dist: number;

		/**
		 * discord module
		 */
		socialclub: string;
		discord: playerDiscord;
		
		/**
		 * levels
		 */
		level: { currentXP: number; currentLevel: number; };
		setLevel: (newLevel: number) => void;
		setXP: (newXP: number) => void;
		changeXP: (xpAmount: number) => void;
		hasReachedMaxLevel: () => boolean;

		setDateTime(day: number, month: number, year: number, hour: number, minute: number, second: number): void;
		setWeather(weather: number): void;

		spawn(x: number, y: number, z: number, delay: number): void;

		kick(): void;

		/**
		 * inventory system 
		 */

		getInventory(): void;
		setInventory({ }: any): void;
		hasItem(itemKey: string): void;
		hasItemWithData(itemKey: string, data: any): void;
		getItemIndex(itemKey: string): void;
		getItemIndexWithData(itemKey: string, data: any): void;
		getItemAmount(itemKey: string): void;
		getItemAmountWithData(itemKey: string, data: any): void;
		getTotalItemAmount(): void;
		giveItem(itemKey: string, amount: number, data: any): void;
		useItem(itemIdx: number): void;
		removeItem(itemIdx: number, amount: number): void;
	}

	export const players: Player[];

	export class VoiceChannel extends BaseObject {
		addPlayer(p: Player): void;
		removePlayer(p: Player): void;
		isPlayerInChannel(p: Player): boolean;
		mutePlayer(p: Player): void;
		unmutePlayer(p: Player): void;
		isPlayerMuted(p: Player): boolean;
	}

	export class Vehicle extends Entity {
		driver: Player;
		modKit: number;
		modKitsCount: number;
		primaryColor: number;
		secondaryColor: number;
		customPrimaryColor: number;
		customSecondaryColor: number;
		tireSmokeColor: number;
		neonColor: number;
		pearlColor: number;
		wheelColor: number;
		interiorColor: number;
		dashboardColor: number;
		customTires: number;
		darkness: number;
		windowTint: number;
		neon: number;
		dirtLevel: number;
		numberPlateIndex: number;
		numberPlateText: string;

		getModsCount(category: number): number;
		setMod(category: number, id: number): void;
		setExtra(id: number, disable: boolean): void;
		setWheels(category: number, id: number): void;

		engineOn: boolean;
		readonly handbrakeActive: boolean;
		headlightColor: number;
		sirenActive: boolean;
		lockState: VehicleLockState;
		readonly daylightOn: boolean;
		readonly nightlightOn: boolean;
		roofOpened: boolean;
		readonly flamethrowerActive: boolean;

		getDoorState(id: number): number;
		setDoorState(id: number, state: number): void;
		isWindowOpened(id: number): boolean;
		setWindowOpened(id: number, opened: boolean): void;
		getGamestateDataBase64(): string;
		setGamestateDataBase64(data: string): void;

		engineHealth: number;
		petrolTankHealth: number;
		bodyHealth: number;
		bodyAdditionalHealth: number;
		readonly wheelsCount: number;
		readonly repairsCount: number;

		setWheelBurst(id: number, burst: boolean): void;
		isWheelBurst(id: number): boolean;
		setWheelHasTire(id: number, hasTire: boolean): void;
		doesWheelHasTire(id: number): boolean;
		setWheelHealth(id: number, health: number): void;
		getWheelHealth(id: number): number;
		getHealthDataBase64(): string;
		setHealthDataBase64(data: string): void;

		readonly hasArmoredWindows: boolean;

		getPartDamageLevel(id: number): number;
		setPartDamageLevel(id: number, damageLevel: number): void;
		getPartBulletHoles(id: number): number;
		setPartBulletHoles(id: number, bulletHoles: number): void;
		isLightDamaged(id: number): boolean;
		setLightDamaged(id: number, damaged: boolean): void;
		isWindowDamaged(id: number): boolean;
		setWindowDamaged(id: number, damaged: boolean): void;
		isSpecialLightDamaged(id: number): boolean;
		setSpecialLightDamaged(id: number, damaged: boolean): void;
		getBumperDamageLevel(id: number): number;
		setBumperDamageLevel(id: number, damageLevel: number): void;
		getArmoredWindowHealth(id: number): number;
		setArmoredWindowHealth(id: number, health: number): void;
		getArmoredWindowShootCount(id: number): number;
		setArmoredWindowShootCount(id: number, shootCount: number): void;
		getDamageStatusBase64(): string;
		setDamageStatusBase64(data: string): void;

		dist: number;
	}

	export function on(event: string, callback: Function): void;
	export function emit(event: string, ...args: any[]): void;
	export function onClient(event: string, callback: Function): void;
	export function emitClient(client: Player | null, event: string, ...args: any[]): void;

	export function log(...args: any[]): void;
	export function logWarning(...args: any[]): void;
	export function logError(...args: any[]): void;

	export function getPlayersByName(name: string): Player[];

	export function createVehicle(model: number | string, posX: number, posY: number, posZ: number, roll: number, pitch: number, yaw: number): Vehicle;
	export function removeEntity(entity: Entity): void;

	export function createCheckpoint(type: number, x: number, y: number, z: number, radius: number, height: number, r: number, g: number, b: number, a: number): Checkpoint;
	export function createBlipForCoords(type: number, x: number, y: number, z: number): Blip;

	export function createVoiceChannel(isChannel3D: boolean, maxDistance: number): VoiceChannel;
	export function removeVoiceChannel(channel: VoiceChannel): void;
}
