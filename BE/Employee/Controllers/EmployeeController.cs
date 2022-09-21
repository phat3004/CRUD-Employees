using Employee.Data;
using Employee.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Employee.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        private readonly EmployeeContext _context;

        public EmployeeController(EmployeeContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> AllEmployee()
        {
            var em = await _context.Employees.ToListAsync();
            return Ok(em);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employ_Post employ)
        {
            Employ em = new Employ();
            em.Name = employ.Name;
            em.Email = employ.Email;
            em.Phone = employ.Phone;
            em.Salary = employ.Salary;
            em.Department = employ.Department;
            await _context.Employees.AddAsync(em);
            await _context.SaveChangesAsync();
            return Ok(employ);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> AllEmployee([FromRoute] int id)
        {
            var em = await _context.Employees.FirstOrDefaultAsync(x => x.Id == id);
            if(em == null)
            {
                return NotFound();
            }
            return Ok(em);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] int id, Employ_Post updateEmploye)
        {
            var em = await _context.Employees.FirstOrDefaultAsync(x => x.Id == id);
            if (em == null)
            {
                return NotFound();
            }
            em.Name = updateEmploye.Name;
            em.Phone = updateEmploye.Phone;
            em.Email = updateEmploye.Email;
            em.Salary = updateEmploye.Salary;
            em.Department = updateEmploye.Department;
            await _context.SaveChangesAsync();
            return Ok(em);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] int id)
        {
            var em = await _context.Employees.FirstOrDefaultAsync(x => x.Id == id);
            if(em == null)
            {
                return NotFound();
            }
            _context.Remove(em);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
