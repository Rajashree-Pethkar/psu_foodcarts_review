var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** @module Models/User */
import TypeORM from "typeorm";
import { ReviewReactions } from "./reviewreactions.js";
import { Reviews } from "./reviews.js";
/**
 *  Class representing user table
 */
let User = class User extends TypeORM.BaseEntity {
    id;
    name;
    email;
    password;
    dob;
    // Reviews
    reviews;
    // Reviews
    reviewreactions;
    created_at;
    updated_at;
};
__decorate([
    TypeORM.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    TypeORM.Column({
        length: 100,
        type: "varchar",
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    TypeORM.Column("text"),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    TypeORM.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    TypeORM.Column(),
    __metadata("design:type", Date)
], User.prototype, "dob", void 0);
__decorate([
    TypeORM.OneToMany((type) => Reviews, (r) => r.user),
    __metadata("design:type", Object)
], User.prototype, "reviews", void 0);
__decorate([
    TypeORM.OneToMany((type) => ReviewReactions, (r) => r.user),
    __metadata("design:type", Object)
], User.prototype, "reviewreactions", void 0);
__decorate([
    TypeORM.CreateDateColumn(),
    __metadata("design:type", String)
], User.prototype, "created_at", void 0);
__decorate([
    TypeORM.UpdateDateColumn(),
    __metadata("design:type", String)
], User.prototype, "updated_at", void 0);
User = __decorate([
    TypeORM.Entity({ name: "users" })
], User);
export { User };
//# sourceMappingURL=user.js.map