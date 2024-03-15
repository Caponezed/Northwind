using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Northwind.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly NorthwindContext _context;

        public CategoriesController(NorthwindContext context)
        {
            this._context = context;
        }

        [HttpGet(Name = "GetAllCategories")]
        public async Task<ActionResult<List<Object>>> GetAllCategories()
        {
            var categories = _context.Categories.ToListAsync<Object>();

            return Ok(await categories);
        }
    }
}
