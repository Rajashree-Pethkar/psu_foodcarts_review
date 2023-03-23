var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** @module Models/FoodCarts */
import TypeORM from "typeorm";
import { Reviews } from "./reviews.js";
/**
 *  Class representing food carts table
 */
let FoodCarts = class FoodCarts extends TypeORM.BaseEntity {
    id;
    name;
    hours;
    about;
    image;
    category;
    rating;
    // Reviews
    reviews;
    created_at;
    updated_at;
};
__decorate([
    TypeORM.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], FoodCarts.prototype, "id", void 0);
__decorate([
    TypeORM.Column(),
    __metadata("design:type", String)
], FoodCarts.prototype, "name", void 0);
__decorate([
    TypeORM.Column(),
    __metadata("design:type", String)
], FoodCarts.prototype, "hours", void 0);
__decorate([
    TypeORM.Column(),
    __metadata("design:type", String)
], FoodCarts.prototype, "about", void 0);
__decorate([
    TypeORM.Column(),
    __metadata("design:type", String)
], FoodCarts.prototype, "image", void 0);
__decorate([
    TypeORM.Column(),
    __metadata("design:type", String)
], FoodCarts.prototype, "category", void 0);
__decorate([
    TypeORM.Column(),
    __metadata("design:type", String)
], FoodCarts.prototype, "rating", void 0);
__decorate([
    TypeORM.OneToMany((type) => Reviews, (r) => r.foodcart),
    __metadata("design:type", Object)
], FoodCarts.prototype, "reviews", void 0);
__decorate([
    TypeORM.CreateDateColumn(),
    __metadata("design:type", String)
], FoodCarts.prototype, "created_at", void 0);
__decorate([
    TypeORM.UpdateDateColumn(),
    __metadata("design:type", String)
], FoodCarts.prototype, "updated_at", void 0);
FoodCarts = __decorate([
    TypeORM.Entity({ name: "foodcarts" })
], FoodCarts);
export { FoodCarts };
//# sourceMappingURL=foodcarts.js.map