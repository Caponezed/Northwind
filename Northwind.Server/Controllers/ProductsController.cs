using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Northwind.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly NorthwindContext _context;

        public ProductsController(NorthwindContext context)
        {
            this._context = context;
        }
        
        [HttpGet(Name = "GetAllProducts")]
        public async Task<ActionResult<List<Object>>> GetAllProducts()
        {
            var products = _context.Products
                .Join(
                _context.Categories,
                p => p.CategoryId,
                c => c.CategoryId,
                (p, c) => new
                {
                    productId = p.ProductId,
                    productName = p.ProductName,
                    productCategory = c.CategoryName,
                    productDescription = c.Description,
                    productPrice = p.UnitPrice,
                    quantityPerProduct = p.QuantityPerUnit,
                    unitsInStock = p.UnitsInStock,
                    p.ImageUrl,
                }).ToListAsync<Object>();
                
            return Ok(await products);
        }
    }
}
