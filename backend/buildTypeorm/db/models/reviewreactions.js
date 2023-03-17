var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** @module Models/ReviewReactions */
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";
import { Reviews } from "./reviews.js";
import { User } from "./user.js";
/**
 *  Class representing review rections table
 */
let ReviewReactions = class ReviewReactions extends BaseEntity {
    id;
    reaction;
    review;
    user;
    created_at;
    updated_at;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ReviewReactions.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], ReviewReactions.prototype, "reaction", void 0);
__decorate([
    ManyToOne((type) => Reviews, (r) => r.reviewreactions, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Object)
], ReviewReactions.prototype, "review", void 0);
__decorate([
    ManyToOne((type) => User, (user) => user.reviewreactions, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Object)
], ReviewReactions.prototype, "user", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", String)
], ReviewReactions.prototype, "created_at", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", String)
], ReviewReactions.prototype, "updated_at", void 0);
ReviewReactions = __decorate([
    Entity({ name: "reviewreactions" })
], ReviewReactions);
export { ReviewReactions };
//# sourceMappingURL=reviewreactions.js.map