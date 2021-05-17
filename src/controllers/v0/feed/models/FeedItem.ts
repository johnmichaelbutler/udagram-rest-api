import { Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, ForeignKey } from 'sequelize-typescript';
import { User } from '../../users/models/User';

@Table
export class FeedItems extends Model {
  @Column
  public caption!: string;

  @Column
  public url!: string;

  // @CreatedAt sets the option in postgres to automatically set the dat when any row is created or updated
  @Column
  @CreatedAt
  public createdAt: Date = new Date();

  // @CreatedAt sets the option in postgres to automatically set the dat when any row is created or updated
  @Column
  @CreatedAt
  public updatedAt: Date = new Date();
}
