import faker from 'faker'
import { Mappable } from './CustomMap'

export class User implements Mappable {
    name: string
    location: google.maps.LatLngLiteral

    constructor() {
        this.name = faker.name.firstName()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.latitude())
        }
    }
    markerContent(): string {
        return `User Name: ${this.name}`
    }
}
