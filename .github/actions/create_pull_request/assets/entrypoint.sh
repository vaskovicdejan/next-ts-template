#!/usr/bin/env ash

REQUEST_BODY=$(cat << PULL_REQUEST
{
    "title": "${INPUT_TITLE}",
    "body": "${INPUT_BODY}",
    "head": "${INPUT_BRANCH_NAME}",
    "base": "${INPUT_TARGET_BRANCH_NAME}"
}
PULL_REQUEST
)

RESPONSE=$(curl -X POST \
    --url https://api.github.com/repos/${INPUT_REPOSITORY}/pulls \
    --header 'content-type: application/vnd.github.sailor-v-preview+json' \
    --header "authorization: bearer ${INPUT_GITHUB_TOKEN}" \
    --data "${REQUEST_BODY}")

ret=$?
if [ $? -ne 0 ]; then
    exit ${ret}
fi

PULL_REQUEST_URL=$(echo ${RESPONSE} | jq -r ".url")
PULL_REQUEST_HTML_URL=$(echo ${RESPONSE} | jq -r ".html_url")
echo "PULL_REQUEST_URL=${PULL_REQUEST_URL}" >> $GITHUB_ENV
echo "PULL_REQUEST_HTML_URL=${PULL_REQUEST_HTML_URL}" >> $GITHUB_ENV

exit $?
