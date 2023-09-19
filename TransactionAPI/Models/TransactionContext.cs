using Microsoft.EntityFrameworkCore;

public class TransactionContext : DbContext
{
    public TransactionContext(DbContextOptions<TransactionContext> options) : base(options) { }

    public DbSet<TransactionAPI.Models.AnyTransaction> Transactions { get; set; }
}
