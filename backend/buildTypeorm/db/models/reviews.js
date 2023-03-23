var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** @module Models/Reviews */
import TypeORM from "typeorm";
import { FoodCarts } from "./foodcarts.js";
import { ReviewImages } from "./reviewimages.js";
import { ReviewReactions } from "./reviewreactions.js";
import { User } from "./user.js";
/**
 *  Class representing reviews table
 */
let Reviews = class Reviews extends TypeORM.BaseEntity {
    id;
    text;
    rating;
    user;
    foodcart;
    // Review Images
    reviewimages;
    // Review Reactions
    reviewreactions;
    created_at;
    updated_at;
};
__decorate([
    TypeORM.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Reviews.prototype, "id", void 0);
__decorate([
    TypeORM.Column(),
    __metadata("design:type", String)
], Reviews.prototype, "text", void 0);
__decorate([
    TypeORM.Column(),
    __metadata("design:type", Number)
], Reviews.prototype, "rating", void 0);
__decorate([
    TypeORM.ManyToOne((type) => User, (user) => user.reviews, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Object)
], Reviews.prototype, "user", void 0);
__decorate([
    TypeORM.ManyToOne((type) => FoodCarts, (fc) => fc.reviews, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Object)
], Reviews.prototype, "foodcart", void 0);
__decorate([
    TypeORM.OneToMany((type) => ReviewImages, (r) => r.review),
    __metadata("design:type", Object)
], Reviews.prototype, "reviewimages", void 0);
__decorate([
    TypeORM.OneToMany((type) => ReviewReactions, (r) => r.review),
    __metadata("design:type", Object)
], Reviews.prototype, "reviewreactions", void 0);
__decorate([
    TypeORM.CreateDateColumn(),
    __metadata("design:type", String)
], Reviews.prototype, "created_at", void 0);
__decorate([
    TypeORM.UpdateDateColumn(),
    __metadata("design:type", String)
], Reviews.prototype, "updated_at", void 0);
Reviews = __decorate([
    TypeORM.Entity({ name: "reviews" })
], Reviews);
export { Reviews };
//# sourceMappingURL=reviews.js.map