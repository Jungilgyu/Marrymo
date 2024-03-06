package site.marrymo.restapi.rollingpaper.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;
import org.hibernate.annotations.CreationTimestamp;
import site.marrymo.restapi.user.entity.User;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "rolling_paper")
public class RollingPaper {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rolling_paper_id")
    private Long rollingPaperId;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "user_sequence", nullable = false)
    private User user;

    @NotNull
    @Column(nullable = false)
    private String writer;

    @NotNull
    @Column(nullable = false)
    private String content;

    @NotNull
    @Column(name = "created_at", nullable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Builder
    public RollingPaper(User user, String writer, String content){
        this.user = user;
        this.writer = writer;
        this.content = content;
    }
}
