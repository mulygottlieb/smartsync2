/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TaskEmployee, Task, Employee } from "@prisma/client";

export class TaskEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TaskEmployeeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskEmployeeCountArgs>
  ): Promise<number> {
    return this.prisma.taskEmployee.count(args);
  }

  async findMany<T extends Prisma.TaskEmployeeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskEmployeeFindManyArgs>
  ): Promise<TaskEmployee[]> {
    return this.prisma.taskEmployee.findMany(args);
  }
  async findOne<T extends Prisma.TaskEmployeeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskEmployeeFindUniqueArgs>
  ): Promise<TaskEmployee | null> {
    return this.prisma.taskEmployee.findUnique(args);
  }
  async create<T extends Prisma.TaskEmployeeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskEmployeeCreateArgs>
  ): Promise<TaskEmployee> {
    return this.prisma.taskEmployee.create<T>(args);
  }
  async update<T extends Prisma.TaskEmployeeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskEmployeeUpdateArgs>
  ): Promise<TaskEmployee> {
    return this.prisma.taskEmployee.update<T>(args);
  }
  async delete<T extends Prisma.TaskEmployeeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskEmployeeDeleteArgs>
  ): Promise<TaskEmployee> {
    return this.prisma.taskEmployee.delete(args);
  }

  async getTask(parentId: string): Promise<Task | null> {
    return this.prisma.taskEmployee
      .findUnique({
        where: { id: parentId },
      })
      .task();
  }

  async getEmployee(parentId: string): Promise<Employee | null> {
    return this.prisma.taskEmployee
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }
}