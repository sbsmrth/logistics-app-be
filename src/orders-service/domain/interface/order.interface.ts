import { CreateOrderResponseDto, OrderWithSubOrdersDto } from "../../application/dtos/orderDto";
import { Order } from "../entity/order";
import { UpdateOrderDto } from "../../application/dtos/updateOrderDto";
import { OrderStatus } from "../../../shared/enums/orderStatus.enum";

export interface IOrderRepository {
    create(order:CreateOrderResponseDto): Promise<Order>;
    findById(id: number, options?: any): Promise<OrderWithSubOrdersDto>; 
    findAll(): Promise<Order[]>;
    update(id:number, order:UpdateOrderDto): Promise<Order>;
    updateStatus(id:number, status:OrderStatus): Promise<Order>;
    findByClientId(clientId: string): Promise<Order[]>
    findByOrder(id: number): Promise<Order> 
}