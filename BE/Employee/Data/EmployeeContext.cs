using Microsoft.EntityFrameworkCore;
using Employee.Model;
namespace Employee.Data
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Employ> Employees { get; set; }
    }
}
