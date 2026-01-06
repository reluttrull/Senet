using Senet.Model;

namespace Senet.Matchmaking
{
    public interface IMatchmakingQueue
    {
        ValueTask EnqueueAsync(MatchRequest request);
        ValueTask<MatchRequest> DequeueAsync(CancellationToken cancellationToken);
        bool TryPeek(out MatchRequest request);
        int Count { get; }
    }
}
