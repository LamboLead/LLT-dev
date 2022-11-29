CREATE VIEW `projects_view` AS
	SELECT
		projects.project_id AS id,
        projects.title AS title,
        members.name AS member_name
	FROM projects INNER JOIN members_has_projects
	ON projects.project_id = members_has_projects.project_id
	INNER JOIN members
    ON members.member_id = members_has_projects.member_id;