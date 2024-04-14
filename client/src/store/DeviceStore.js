import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'PC'},
            {id:2, name: 'Telephone'},
            {id:3, name: 'Hodetelefoner'},
            {id:4, name: 'Photo'}
        ]
        this._brands = [
            {id:1, name: 'Lenovo'},
            {id:2, name: 'Samsung'},
            {id:3, name: 'Apple'},

        ]
        this._devices = [
        {id:1, name: "Samsung A23", price: 25000, rating:5, img: "htttps. www/photo.log" },
        {id:2, name: "Samsung A23", price: 25000, rating:5, img: "htttps. www/photo.log" },
        {id:3, name: "Samsung A23", price: 25000, rating:5, img: "htttps. www/photo.log" },
        {id:4, name: "Samsung A23", price: 25000, rating:5, img: "htttps. www/photo.log" },
            {id:4, name: "Samsung A23", price: 25000, rating:5, img: "htttps. www/photo.log" },
            {id:4, name: "Samsung A23", price: 25000, rating:5, img: "htttps. www/photo.log" },
            {id:4, name: "Samsung A23", price: 25000, rating:5, img: "htttps. www/photo.log" },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }


    get Types() {
        return this._types

    }
    get Brands() {
        return this._brands
    }
    get Devices() {
        return this._devices
    }
    get SelectedType() {
        return this._selectedType
    }
    get SelectedBrand() {
        return this._selectedBrand
    }
}